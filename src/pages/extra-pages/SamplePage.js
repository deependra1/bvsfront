// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { Nepal } from 'utils/nepal__';

const provinces = Object.keys(Nepal); // data is your JSON data

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedMunicipality, setSelectedMunicipality] = useState(null);

  console.log(provinces);

  const handleProvinceChange = (event, newValue) => {
    setSelectedProvince(newValue);
    setSelectedDistrict(null);
    setSelectedMunicipality(null);
  };

  const handleDistrictChange = (event, newValue) => {
    setSelectedDistrict(newValue);
    // setSelectedMunicipality(null);
  };

  // const handleMunicipalityChange = (event, newValue) => {
  //   setSelectedMunicipality(newValue);
  // };
  return (
    <MainCard title="Sample Card">
      <Typography variant="body2">
        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
        minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
        reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui
        officiate descent molls anim id est labours.
      </Typography>
      <div>
        <Autocomplete
          value={selectedProvince}
          onChange={handleProvinceChange}
          options={provinces}
          renderInput={(params) => <TextField {...params} label="Province" />}
        />

        {selectedProvince && (
          <Autocomplete
            value={selectedDistrict}
            onChange={handleDistrictChange}
            options={Object.keys(Nepal[selectedProvince])}
            renderInput={(params) => <TextField {...params} label="District" />}
          />
        )}

        {selectedDistrict && (
          <Autocomplete
            value={selectedMunicipality}
            options={Nepal[selectedProvince][selectedDistrict]}
            renderInput={(params) => <TextField {...params} label="Municipality" />}
          />
        )}

        {/* {selectedMunicipality && (
          <Autocomplete
            options={Nepal[selectedProvince][selectedDistrict][selectedMunicipality]}
            renderInput={(params) => <TextField {...params} label="Ward" />}
          />
        )} */}
      </div>
    </MainCard>
  );
};

export default SamplePage;
