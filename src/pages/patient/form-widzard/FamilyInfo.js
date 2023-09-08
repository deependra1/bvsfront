import { Grid, InputLabel, Stack, Select, MenuItem, OutlinedInput, TextField, FormHelperText } from '@mui/material';
import useSWR from 'swr';
import { fetcher } from 'helpers/axios';

const FamilyInfo = ({ errors, values, handleChange, touched }) => {
  const { data: familyData, error: familyError, isLoading: familyLoading } = useSWR(`/family/`, fetcher, { revalidateOnMount: true });
  const {
    data: occupationData,
    error: occupationError,
    isLoading: occupationLoading
  } = useSWR(`/occupation/`, fetcher, { revalidateOnMount: true });

  if (familyLoading || occupationLoading) {
    return <div>Loading...</div>;
  }

  if (familyError || occupationError) {
    return <div>Error on Data</div>;
  }

  return (
    <>
      <Grid container spacing={3}>
        {/* parent contact */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="parents_contact">Patient Parents Contacts</InputLabel>
            <TextField
              fullWidth
              name="parents_contact"
              value={values.parents_contact}
              onChange={handleChange}
              error={Boolean(touched.parents_contact && errors.parents_contact)}
            />
            {errors.parents_contact && (
              <FormHelperText error id="standard-weight-helper-text-parents_contact">
                {errors.parents_contact}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of parent contact */}

        {/* family type */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="family_type">Family Type</InputLabel>
            <Select
              labelId="family_type"
              id="family_type"
              value={values.family_type}
              name="family_type"
              onChange={handleChange}
              error={Boolean(touched.family_type && errors.family_type)}
            >
              {familyData.map((family) => (
                <MenuItem key={family.id} value={family.id}>
                  {family.family_type}
                </MenuItem>
              ))}
            </Select>
            {errors.family_type && (
              <FormHelperText error id="standard-weight-helper-text-family_type">
                {errors.family_type}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of family type */}

        {/* s occupation */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="suppose_occupation">Spouse Occupation</InputLabel>
            <Select
              labelId="suppose_occupation"
              id="suppose_occupation"
              value={values.suppose_occupation}
              name="suppose_occupation"
              onChange={handleChange}
              error={Boolean(touched.suppose_occupation && errors.suppose_occupation)}
            >
              {occupationData.map((occupation) => (
                <MenuItem key={occupation.id} value={occupation.id}>
                  {occupation.occupation_name}
                </MenuItem>
              ))}
            </Select>
            {errors.suppose_occupation && (
              <FormHelperText error id="standard-weight-helper-text-suppose_occupation">
                {errors.suppose_occupation}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of s occupation */}

        {/* p occup */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="parents_occupation">Parents Occupation</InputLabel>
            <Select
              labelId="parents_occupation"
              id="parents_occupation"
              value={values.parents_occupation}
              name="parents_occupation"
              onChange={handleChange}
              error={Boolean(touched.parents_occupation && errors.parents_occupation)}
            >
              {occupationData.map((occupation) => (
                <MenuItem key={occupation.id} value={occupation.id}>
                  {occupation.occupation_name}
                </MenuItem>
              ))}
            </Select>
            {errors.parents_occupation && (
              <FormHelperText error id="standard-weight-helper-text-parents_occupation">
                {errors.parents_occupation}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of p occup */}

        {/* number of child */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="number_of_child">Number of Child</InputLabel>
            <OutlinedInput
              fullWidth
              type="number"
              error={!!errors.number_of_child}
              name="number_of_child"
              value={values.number_of_child}
              onChange={handleChange}
            />
          </Stack>
        </Grid>
        {/* end of number of child */}

        {/* number of Siblings */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="number_of_siblings">Number of Siblings</InputLabel>
            <OutlinedInput
              fullWidth
              type="number"
              error={!!errors.number_of_siblings}
              name="number_of_siblings"
              value={values.number_of_siblings}
              helperText={errors.number_of_siblings}
              onChange={handleChange}
            />
          </Stack>
        </Grid>
        {/* end of number of Siblings */}
      </Grid>
    </>
  );
};

export default FamilyInfo;
