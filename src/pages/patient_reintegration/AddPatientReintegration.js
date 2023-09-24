import * as React from 'react';
import { FormHelperText, Grid, InputLabel, OutlinedInput, Stack, Typography, Select, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import axiosService, { fetcher } from 'helpers/axios';
import { useSnackbar } from 'notistack';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// initial dialog setting
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};
// end of dialog setting

export default function AddPatientReintegration() {
  const [open, setOpen] = React.useState(false);
  const { patientId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [currentPatientId, setCurrentPatientId] = React.useState(patientId);
  const [selectedReintegration, setSelectedReintegration] = React.useState({});
  const [selectedQuestionId, setSelectedQuestionId] = React.useState('');

  React.useEffect(() => {
    setCurrentPatientId(patientId);
  }, [patientId]);

  // fetching reintegration data
  const {
    data: reintegrateData,
    error: reintegrateError,
    isLoading: reintegrateLoading,
    mutate: reintegrateMutate
  } = useSWR(`/patient/${currentPatientId}/reintegration/`, fetcher, { revalidateOnMount: true });
  // end of fetching

  // fetching question data
  const { data: questionData } = useSWR(`/question/`, fetcher, { revalidateOnMount: true });
  // end of fetching
  console.log(questionData);
  // DataGrid column initalization
  const columns = [
    {
      field: 'question',
      headerName: 'Question',
      width: 550,
      editable: true,
      valueGetter: (params) => `${params.row.question.questionnaire || ''}`
    },
    {
      field: 'answer',
      headerName: 'Answer',
      width: 250,
      editable: true
    },

    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      width: 100,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => handleEdit(params)} sx={{ color: '#9c27b0' }}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.id)} sx={{ color: '#f44336' }}>
            <DeleteIcon />
          </IconButton>
        </>
      )
    }
  ];
  // end of column initalization

  // to dialog open and close
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedReintegration({});
    setSelectedQuestionId('');
    setOpen(false);
  };
  // end of dialog open and close

  // handle edit delete and add
  const handleEdit = (reintegration) => {
    setSelectedReintegration(reintegration.row);
    setSelectedQuestionId(reintegration.row.question.id);
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure to delete reintegration data?')) {
      axiosService
        .delete(`/patient/${patientId}/reintegration/${id}/`)
        .then(() => {
          enqueueSnackbar('reintegration Deleted successfully!!!', { variant: 'success' });
          reintegrateMutate();
        })
        .catch(() => {
          enqueueSnackbar('something wents wrong!!!', { variant: 'error' });
        });
    }
  };

  const handleAddreintegration = (values, { setErrors, setStatus, setSubmitting }) => {
    if (selectedReintegration.id) {
      axiosService
        .put(`/patient/${patientId}/reintegration/${selectedReintegration.id}/`, values)
        .then(() => {
          enqueueSnackbar('reintegration data updated successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          reintegrateMutate();
          setSelectedReintegration({});
          setSelectedQuestionId('');
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong while adding the reintegration!!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    } else {
      axiosService
        .post(`/patient/${patientId}/reintegration/`, values)
        .then(() => {
          enqueueSnackbar('reintegration added successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          reintegrateMutate();
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong while adding the reintegration data!!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    }
    setOpen(false);
  };
  // end of  handle edit delete and add

  if (reintegrateLoading) {
    return <div>Loading...</div>;
  }

  if (reintegrateError) {
    return <div>Error on Treatment</div>;
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" gutterBottom>
            Reintegration Detail
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={2}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add Reintegration
          </Button>
        </Grid>
      </Grid>

      {/* data grid */}
      <DataGrid
        rows={reintegrateData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5
            }
          }
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
      {/* end of data grid */}
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {selectedReintegration.id ? 'Update reintegration Data' : 'Add reintegration Data'}
        </BootstrapDialogTitle>
        <Formik
          enableReinitialize={true}
          initialValues={{
            patient: patientId,
            question: selectedQuestionId || '',
            answer: selectedReintegration?.answer || ''
          }}
          validationSchema={Yup.object().shape({
            answer: Yup.string().required('Required valid answer')
          })}
          onSubmit={handleAddreintegration}
        >
          {({ errors, handleChange, handleSubmit, isSubmitting, touched, values, handleBlur }) => (
            <Form noValidate>
              <DialogContent dividers>
                <Grid container spacing={3}>
                  {/* question info */}
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="question">Questionnaire*</InputLabel>
                      <Select
                        fullWidth
                        labelId="question"
                        id="question"
                        value={values.question}
                        name="question"
                        onChange={handleChange}
                        // error={!!errors.question}
                        // helperText={errors.question}
                      >
                        {questionData.map((questionnaire) => (
                          <MenuItem key={questionnaire.id} value={questionnaire.id}>
                            {questionnaire.questionnaire}
                          </MenuItem>
                        ))}
                      </Select>
                    </Stack>
                  </Grid>
                  {/* end of question info */}

                  {/* funded amount  */}
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="reintegration">Answer*</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="reintegration"
                        type="text"
                        value={values.answer}
                        name="answer"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter reintegration amount"
                        error={Boolean(touched.answer && errors.answer)}
                      />
                      {touched.answer && errors.answer && (
                        <FormHelperText error id="standard-weight-helper-text-answer">
                          {errors.answer}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of funded amount */}
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button autoFocus variant="outlined" disableElevation disabled={isSubmitting} onClick={handleSubmit} color="primary">
                  {selectedReintegration.id ? 'Update' : 'Save'}
                </Button>
                <Button autoFocus variant="outlined" color="error" onClick={handleClose}>
                  Cancel
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </BootstrapDialog>
    </div>
  );
}
