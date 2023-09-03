import { useState } from 'react';
import { Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useSnackbar } from 'notistack';
// import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';
import { Formik } from 'formik';
import axiosService from 'helpers/axios';

const AddTreatment = (props) => {
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  //   const navigate = useNavigate();
  const pid = props.pid;
  const hid = props.hid;
  console.log(hid);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Treatment
      </Button>

      <Formik
        initialValues={{
          patient: pid,
          hospital: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          hospital: Yup.string().required('Hospital is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          axiosService
            .post(`/patient/${pid}/treatment/`, values)
            .then(() => {
              enqueueSnackbar('Patient added successfully!!!', { variant: 'success' });
              setStatus({ success: false });
              setSubmitting(false);
            })
            .catch((err) => {
              enqueueSnackbar('Something went wrong while adding the patient!!!', { variant: 'error' });
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            });
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate>
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
              <DialogTitle id="responsive-dialog-title">{'Add Treatment'}</DialogTitle>
              <DialogContent>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="hospital">Hospital</InputLabel>
                    <OutlinedInput
                      id="hospital"
                      type="hospital"
                      value={values.hospital}
                      name="hospital"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter hospital address"
                      fullWidth
                      error={Boolean(touched.hospital && errors.hospital)}
                    />
                    {touched.hospital && errors.hospital && (
                      <FormHelperText error id="standard-weight-helper-text-hospital">
                        {errors.hospital}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button disableElevation disabled={isSubmitting} onClick={handleSubmit} color="primary">
                  Add
                </Button>
                <Button onClick={handleClose} autoFocus color="secondary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddTreatment;
