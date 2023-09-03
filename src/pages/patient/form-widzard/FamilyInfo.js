import { Grid, InputLabel, Stack, Select, MenuItem, RadioGroup, FormControlLabel, Radio, OutlinedInput } from '@mui/material';
import useSWR from 'swr';
import { fetcher } from 'helpers/axios';

const FamilyInfo = ({ errors, values, handleChange }) => {
  const { data: ethnicData, ethnicError, isLoading: ethnicLoading } = useSWR(`/ethnic/`, fetcher, { revalidateOnMount: true });
  const { data: familyData, familyError, isLoading: familyLoading } = useSWR(`/family/`, fetcher, { revalidateOnMount: true });
  const { data: religionData, religionError, isLoading: religionLoading } = useSWR(`/religion/`, fetcher, { revalidateOnMount: true });

  if (ethnicLoading || familyLoading || religionLoading) {
    return <div>Loading...</div>;
  }

  if (ethnicError || familyError || religionError) {
    return <div>Error on Data</div>;
  }

  return (
    <>
      <Grid container spacing={3}>
        {/* Ethnic Group */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="ethnic_group">Ethnic Group</InputLabel>
            <Select labelId="ethnic_group" id="ethnic_group" value={values.ethnic_group} name="ethnic_group" onChange={handleChange}>
              {ethnicData.map((ethnic) => (
                <MenuItem key={ethnic.id} value={ethnic.id}>
                  {ethnic.ethnic_group}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Grid>
        {/* End of Ethnic Group */}

        {/* Religions */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="religion">Religion</InputLabel>
            <Select labelId="religion" id="religion" value={values.religion} name="religion" onChange={handleChange}>
              {religionData.map((religion) => (
                <MenuItem key={religion.id} value={religion.id}>
                  {religion.religion}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Grid>
        {/* End of Religions Group */}

        {/* family type */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="family_type">Family Type</InputLabel>
            <Select labelId="family_type" id="family_type" value={values.family_type} name="family_type" onChange={handleChange}>
              {familyData.map((family) => (
                <MenuItem key={family.id} value={family.id}>
                  {family.family_type}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Grid>
        {/* end of family type */}

        {/* material Status */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="material_status">Material Status</InputLabel>
            <RadioGroup
              row
              aria-labelledby="material_status"
              defaultValue={values.material_status}
              name="material_status"
              values={values.material_status}
              onChange={handleChange}
            >
              <FormControlLabel value="Married" control={<Radio />} label="Married" />
              <FormControlLabel value="Unmarried" control={<Radio />} label="Unmarried" />
            </RadioGroup>
          </Stack>
        </Grid>
        {/* end of gender */}

        {/* number of child */}
        <Grid item xs={12} md={3}>
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
        <Grid item xs={12} md={3}>
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
