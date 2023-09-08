import { Grid, InputLabel, Stack, TextField, Select, MenuItem, FormHelperText } from '@mui/material';
import { useState } from 'react';
import { Nepal } from 'utils/nepal__';

const AddressInfo = ({ errors, values, handleChange, touched }) => {
  const [selectedCountry, setSelectedCountry] = useState(values.country);
  const [selectedProvince, setSelectedProvince] = useState(values.provence);
  const [selectedDistrict, setSelectedDistrict] = useState(values.district);
  const [selectedMunicipality, setSelectedMunicipality] = useState(values.local);

  const [selectedCountry2, setSelectedCountry2] = useState(values.country2);
  const [selectedProvince2, setSelectedProvince2] = useState(values.provence2);
  const [selectedDistrict2, setSelectedDistrict2] = useState(values.district2);
  const [selectedMunicipality2, setSelectedMunicipality2] = useState(values.local2);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedProvince('');
    setSelectedDistrict('');
    setSelectedMunicipality('');
  };

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
    setSelectedDistrict('');
    setSelectedMunicipality('');
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setSelectedMunicipality('');
  };

  const handleMunicipalityChange = (event) => {
    setSelectedMunicipality(event.target.value);
  };

  const handleCountryChange2 = (event) => {
    setSelectedCountry2(event.target.value);
    setSelectedProvince2('');
    setSelectedDistrict2('');
    setSelectedMunicipality2('');
  };

  const handleProvinceChange2 = (event) => {
    setSelectedProvince2(event.target.value);
    setSelectedDistrict2('');
    setSelectedMunicipality2('');
  };

  const handleDistrictChange2 = (event) => {
    setSelectedDistrict2(event.target.value);
    setSelectedMunicipality2('');
  };

  const handleMunicipalityChange2 = (event) => {
    setSelectedMunicipality2(event.target.value);
  };

  values.country = selectedCountry;
  values.provence = selectedProvince;
  values.district = selectedDistrict;
  values.local = selectedMunicipality;

  values.country2 = selectedCountry2;
  values.provence2 = selectedProvince2;
  values.district2 = selectedDistrict2;
  values.local2 = selectedMunicipality2;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>Permanaent Address</Stack>
        </Grid>
        {/* permanent address */}
        <Grid item xs={12} md={2}>
          <Stack spacing={1}>
            <InputLabel htmlFor="countries">Select Country*</InputLabel>
            <Select
              labelId="countries"
              id="countries"
              value={selectedCountry}
              name="country"
              onChange={handleCountryChange}
              error={Boolean(touched.country && errors.country)}
            >
              <MenuItem value="Nepal">Nepal</MenuItem>
              <MenuItem value="Foreign">Foreign</MenuItem>
            </Select>
            {errors.country && (
              <FormHelperText error id="standard-weight-helper-text-country">
                {errors.country}
              </FormHelperText>
            )}
          </Stack>
        </Grid>

        {selectedCountry === 'Nepal' && (
          <Grid item xs={12} md={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="provence">Province*</InputLabel>
              <Select
                labelId="provence"
                id="provence"
                value={selectedProvince}
                name="provence"
                onChange={handleProvinceChange}
                error={Boolean(touched.provence && errors.provence)}
              >
                {Object.keys(Nepal).map((province) => (
                  <MenuItem key={province} value={province}>
                    {province}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
        )}

        {selectedProvince && (
          <Grid item xs={12} md={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="district">District*</InputLabel>
              <Select
                labelId="district"
                id="district"
                value={selectedDistrict}
                name="district"
                onChange={handleDistrictChange}
                error={Boolean(touched.district && errors.district)}
              >
                <MenuItem value="">Select District</MenuItem>
                {Object.keys(Nepal[selectedProvince]).map((district) => (
                  <MenuItem key={district} value={district}>
                    {district}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
        )}
        {selectedDistrict && (
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              <InputLabel htmlFor="local">Local Government*</InputLabel>
              <Select
                labelId="local"
                id="local"
                value={selectedMunicipality}
                name="local"
                onChange={handleMunicipalityChange}
                error={Boolean(touched.local && errors.local)}
              >
                {Nepal[selectedProvince][selectedDistrict].map((municipality) => (
                  <MenuItem key={municipality} value={municipality}>
                    {municipality}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
        )}
        {selectedMunicipality && (
          <Grid item xs={12} md={1}>
            <Stack spacing={1}>
              <InputLabel htmlFor="ward">Ward No.*</InputLabel>
              <Select
                labelId="ward"
                id="ward"
                value={values.ward}
                name="ward"
                onChange={handleChange}
                error={Boolean(touched.ward && errors.ward)}
              >
                {[...Array(36)].map((x, i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
        )}
        {selectedMunicipality && (
          <Grid item xs={12} md={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="tole">Tole/Gaun</InputLabel>
              <TextField fullWidth name="tole" value={values.tole} onChange={handleChange} error={Boolean(touched.tole && errors.tole)} />
            </Stack>
          </Grid>
        )}

        {selectedCountry === 'Foreign' && (
          <Grid item xs={12} md={10}>
            <Stack spacing={1}>
              <InputLabel htmlFor="foreign_address">Full Address(Address Line, Country)</InputLabel>
              <TextField
                fullWidth
                name="foreign_address"
                value={values.foreign_address}
                onChange={handleChange}
                error={Boolean(touched.foreign_address && errors.foreign_address)}
              />
            </Stack>
          </Grid>
        )}
        {/* End of permanent address */}

        <Grid item xs={12}>
          <Stack spacing={1}>Incident Address</Stack>
        </Grid>

        {/* Incident address */}
        <Grid item xs={12} md={2}>
          <Stack spacing={1}>
            <InputLabel htmlFor="countries2">Select Country*</InputLabel>
            <Select
              labelId="countries2"
              id="countries2"
              value={selectedCountry2}
              name="country2"
              onChange={handleCountryChange2}
              error={Boolean(touched.country2 && errors.country2)}
            >
              <MenuItem value="Nepal">Nepal</MenuItem>
              <MenuItem value="Foreign">Foreign</MenuItem>
            </Select>
            {errors.country2 && (
              <FormHelperText error id="standard-weight-helper-text-country2">
                {errors.country2}
              </FormHelperText>
            )}
          </Stack>
        </Grid>

        {selectedCountry2 === 'Nepal' && (
          <Grid item xs={12} md={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="provence2">Province*</InputLabel>
              <Select
                labelId="provence2"
                id="provence2"
                value={selectedProvince2}
                name="provence2"
                onChange={handleProvinceChange2}
                error={Boolean(touched.provence2 && errors.provence2)}
              >
                {Object.keys(Nepal).map((province2) => (
                  <MenuItem key={province2} value={province2}>
                    {province2}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
        )}

        {selectedProvince2 && (
          <Grid item xs={12} md={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="district2">District*</InputLabel>
              <Select
                labelId="district2"
                id="district2"
                value={selectedDistrict2}
                name="district2"
                onChange={handleDistrictChange2}
                error={Boolean(touched.district2 && errors.district2)}
              >
                <MenuItem value="">Select District</MenuItem>
                {Object.keys(Nepal[selectedProvince2]).map((district2) => (
                  <MenuItem key={district2} value={district2}>
                    {district2}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
        )}
        {selectedDistrict2 && (
          <Grid item xs={12} md={3}>
            <Stack spacing={1}>
              <InputLabel htmlFor="local2">Local Government*</InputLabel>
              <Select
                labelId="local2"
                id="local2"
                value={selectedMunicipality2}
                name="local2"
                onChange={handleMunicipalityChange2}
                error={Boolean(touched.local2 && errors.local2)}
              >
                {Nepal[selectedProvince2][selectedDistrict2].map((municipality2) => (
                  <MenuItem key={municipality2} value={municipality2}>
                    {municipality2}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
        )}
        {selectedMunicipality2 && (
          <Grid item xs={12} md={1}>
            <Stack spacing={1}>
              <InputLabel htmlFor="ward2">Ward No.*</InputLabel>
              <Select
                labelId="ward2"
                id="ward2"
                value={values.ward2}
                name="ward2"
                onChange={handleChange}
                error={Boolean(touched.ward2 && errors.ward2)}
              >
                {[...Array(36)].map((x, i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
        )}
        {selectedMunicipality2 && (
          <Grid item xs={12} md={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="tole2">Tole/Gaun</InputLabel>
              <TextField
                fullWidth
                name="tole2"
                value={values.tole2}
                onChange={handleChange}
                error={Boolean(touched.tole2 && errors.tole2)}
              />
            </Stack>
          </Grid>
        )}

        {selectedCountry2 === 'Foreign' && (
          <Grid item xs={12} md={10}>
            <Stack spacing={1}>
              <InputLabel htmlFor="foreign_address2">Full Address(Address Line, Country)</InputLabel>
              <TextField
                fullWidth
                name="foreign_address2"
                value={values.foreign_address2}
                onChange={handleChange}
                error={Boolean(touched.foreign_address2 && errors.foreign_address2)}
              />
            </Stack>
          </Grid>
        )}
        {/* end of incident address */}
      </Grid>
    </>
  );
};

export default AddressInfo;
