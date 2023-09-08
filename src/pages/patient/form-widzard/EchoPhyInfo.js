import { Grid, Stack, InputLabel, TextField, FormHelperText, Checkbox, FormControlLabel } from '@mui/material';

const EchoPhyInfo = ({ errors, values, handleChange, touched, handleBlur }) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="economic_status">Economic Status*</InputLabel>
            <TextField
              fullWidth
              name="economic_status"
              value={values.economic_status}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.economic_status && errors.economic_status)}
            />
            {errors.economic_status && (
              <FormHelperText error id="standard-weight-helper-text-economic_status">
                {errors.economic_status}
              </FormHelperText>
            )}
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="family_support" sx={{ color: '#fff' }}>
              .
            </InputLabel>
            <FormControlLabel
              control={
                <Checkbox name="family_support" value={values.family_support} checked={values.family_support} onChange={handleChange} />
              }
              label="Family Support"
            />
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="pregnant_women" sx={{ color: '#fff' }}>
              .
            </InputLabel>
            <FormControlLabel
              control={
                <Checkbox name="pregnant_women" value={values.pregnant_women} checked={values.pregnant_women} onChange={handleChange} />
              }
              label="Pregnant Women"
            />
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="lactating_mother" sx={{ color: '#fff' }}>
              .
            </InputLabel>
            <FormControlLabel
              control={
                <Checkbox
                  name="lactating_mother"
                  value={values.lactating_mother}
                  checked={values.lactating_mother}
                  onChange={handleChange}
                />
              }
              label="Lactating Mother"
            />
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="with_disabilities" sx={{ color: '#fff' }}>
              .
            </InputLabel>
            <FormControlLabel
              control={
                <Checkbox
                  name="with_disabilities"
                  value={values.with_disabilities}
                  checked={values.with_disabilities}
                  onChange={handleChange}
                />
              }
              label="Persons with Disabilities"
            />
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="mental_illness" sx={{ color: '#fff' }}>
              .
            </InputLabel>
            <FormControlLabel
              control={
                <Checkbox name="mental_illness" value={values.mental_illness} checked={values.mental_illness} onChange={handleChange} />
              }
              label="Mental Illness"
            />
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="epilepsy" sx={{ color: '#fff' }}>
              .
            </InputLabel>
            <FormControlLabel
              control={<Checkbox name="epilepsy" value={values.epilepsy} checked={values.epilepsy} onChange={handleChange} />}
              label="Epilepsy"
            />
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="hiv_positive" sx={{ color: '#fff' }}>
              .
            </InputLabel>
            <FormControlLabel
              control={<Checkbox name="hiv_positive" value={values.hiv_positive} checked={values.hiv_positive} onChange={handleChange} />}
              label="HIV Positive"
            />
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="echo_other">Other</InputLabel>
            <TextField
              fullWidth
              name="echo_other"
              value={values.echo_other}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.echo_other && errors.echo_other)}
            />
            {errors.echo_other && (
              <FormHelperText error id="standard-weight-helper-text-echo_other">
                {errors.echo_other}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default EchoPhyInfo;
