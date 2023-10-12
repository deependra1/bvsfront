// project import
import MainCard from 'components/MainCard';
import { Grid, Stack, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from 'helpers/axios';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const PatientDetail = () => {
  const { patientId } = useParams();
  const { data: patientData, error: patientError, isLoading: patientLoading } = useSWR(`/patient/${patientId}/`, fetcher);
  if (patientLoading) {
    return <div>Loading...</div>;
  }

  if (patientError) {
    return <div>Error on Treatment</div>;
  }
  return (
    <MainCard title="Patients Detail">
      <Grid container spacing={3}>
        {/* <Grid item xs={12} md={12}>
          <Typography variant="h1" align="center">
            BVS-NEPAL
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h3" align="center">
            {patientData.registration_location}
          </Typography>
        </Grid> */}

        {/* <Grid item xs={12} md={5}>
          <Stack direction="row" spacing={2}>
            <Typography variant="h5" color="primary">
              Registration No:
            </Typography>
            <Typography variant="h6">{patientData.registration_number}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={4}>
          <Stack direction="row" spacing={2}>
            <Typography variant="h5" align="right" color="primary">
              Registration date:
            </Typography>
            <Typography variant="h6" align="right">
              {patientData.registration_date}
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} md={5}>
          <Stack direction="row" spacing={2}>
            <Typography variant="h5" color="primary">
              Patient Name:
            </Typography>
            <Typography variant="h6">
              {patientData.fname} {patientData.mname} {patientData.lname}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={4}>
          <Stack direction="row" spacing={2}>
            <Typography variant="h5" align="right" color="primary">
              Fiscal Year:
            </Typography>
            <Typography variant="h6" align="right">
              {patientData.fiscal_year}
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Stack direction="row" spacing={2}>
            <Typography variant="h5" align="right" color="primary">
              Permanent Address:
            </Typography>
            {patientData.country === 'Nepal' && (
              <Typography variant="h6" align="right">
                {patientData.local}-{patientData.ward}, {patientData.tole}, {patientData.district}, {patientData.provence},{' '}
                {patientData.country}
              </Typography>
            )}
            {patientData.country === 'Foreign' && (
              <Typography variant="h6" align="right">
                {patientData.foreign_address}
              </Typography>
            )}
          </Stack>
        </Grid> */}

        <Grid item xs={12}>
          <Stack direction="row" spacing={2}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>BVS Nepal</TableCell>
                    <TableCell align="right" colSpan="2">
                      Patient Details
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Fiscal Year
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.fiscal_year}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Registration No
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.registration_number}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Registration date
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.registration_date}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Patient Name
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">
                      {patientData.fname} {patientData.mname} {patientData.lname}
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Permanent Address
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">
                      {patientData.country === 'Nepal' && (
                        <>
                          {patientData.local}-{patientData.ward}, {patientData.tole}, {patientData.district}, {patientData.provence},{' '}
                          {patientData.country}
                        </>
                      )}
                      {patientData.country === 'Foreign' && <>{patientData.foreign_address}</>}
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Incident At
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">
                      {patientData.country2 === 'Nepal' && (
                        <>
                          {patientData.local2}-{patientData.ward2}, {patientData.tole2}, {patientData.district2}, {patientData.provence2},{' '}
                          {patientData.country2}
                        </>
                      )}
                      {patientData.country2 === 'Foreign' && <>{patientData.foreign_address2}</>}
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Date of Birth
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.date_of_birth}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Age At Incident
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">
                      {patientData.age_at_incident}-{patientData.month_at_incident}
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Gender
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.gender}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Citizenship/Birth Certificate No.
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.citizenship_no}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Patients Contact No.
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.patient_contact}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Patients Optional Contact No.
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.optional_contact}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Patients Parents Contact No.
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.parents_contact}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Patients Education
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.patient_education}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Language
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.patient_language}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Occupation
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.patient_occupation.occupation_name}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Suppose Occupation
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.suppose_occupation.occupation_name}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Parents Occupation
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.parents_occupation.occupation_name}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Ethnic Group
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.ethnic_group.ethnic_group}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Religion
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.religion.religion}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Family Type
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.family_type.family_type}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      Material Status
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.material_status}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      number_of_child
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.number_of_child}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      number_of_siblings
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.number_of_siblings}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      economic_status
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.economic_status}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      family_support
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.family_support}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      pregnant_women
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.pregnant_women}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      lactating_mother
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.lactating_mother}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      with_disabilities
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.with_disabilities}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      mental_illness
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.mental_illness}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      epilepsy
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.epilepsy}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      hiv_positive
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.hiv_positive}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      echo_other
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.echo_other}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      date_of_incident
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.date_of_incident}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      area_of_burn
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.area_of_burn}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      percentage_of_burn
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.percentage_of_burn}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      degree_of_burn
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.degree_of_burn}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      burn_cause
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.burn_cause.burn_cause}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      burn_type
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.burn_type.burn_type}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      place_of_incident
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.place_of_incident}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      description_of_incident
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.description_of_incident}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      person_at_hospital
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.person_at_hospital}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      relation_to_parent
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.relation_to_parent}</TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      person_contact
                    </TableCell>
                    <TableCell>:</TableCell>
                    <TableCell align="left">{patientData.person_contact}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Grid>

        <Grid item xs={12} md={12}>
          <Divider>
            <Chip label="TREATMENT" color="primary" />
          </Divider>
        </Grid>
        <Grid item xs={12} md={12}></Grid>
      </Grid>
    </MainCard>
  );
};

export default PatientDetail;
