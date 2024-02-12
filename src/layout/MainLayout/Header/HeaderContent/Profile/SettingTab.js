// import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// assets
import { UserOutlined } from '@ant-design/icons';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import WorkIcon from '@mui/icons-material/Work';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import QuizIcon from '@mui/icons-material/Quiz';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import TranslateIcon from '@mui/icons-material/Translate';

const SettingTab = () => {
  const theme = useTheme();

  // const [selectedIndex, setSelectedIndex] = useState(0);
  // const handleListItemClick = (event, index) => {
  //   setSelectedIndex(index);
  // };

  return (
    <List
      component="nav"
      sx={{
        p: 0,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& .MuiListItemIcon-root': { minWidth: 32, color: theme.palette.grey[500] }
      }}
    >
      <ListItemButton component={RouterLink} to="user">
        <ListItemIcon>
          <UserOutlined color="secondary" />
        </ListItemIcon>
        <ListItemText primary="User Setting" />
      </ListItemButton>
      <ListItemButton component={RouterLink} to="add-donor">
        <ListItemIcon>
          <VolunteerActivismIcon />
        </ListItemIcon>
        <ListItemText primary="Donors" />
      </ListItemButton>
      <ListItemButton component={RouterLink} to="add-occupation">
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Occupations" />
      </ListItemButton>
      <ListItemButton component={RouterLink} to="add-ethnic">
        <ListItemIcon>
          <Diversity3Icon />
        </ListItemIcon>
        <ListItemText primary="Ethnic Groups" />
      </ListItemButton>
      <ListItemButton component={RouterLink} to="add-religion">
        <ListItemIcon>
          <TempleBuddhistIcon />
        </ListItemIcon>
        <ListItemText primary="Religions" />
      </ListItemButton>
      <ListItemButton component={RouterLink} to="add-family">
        <ListItemIcon>
          <FamilyRestroomIcon />
        </ListItemIcon>
        <ListItemText primary="Family Type" />
      </ListItemButton>
      <ListItemButton component={RouterLink} to="add-burn-type">
        <ListItemIcon>
          <LocalFireDepartmentIcon />
        </ListItemIcon>
        <ListItemText primary="Burn Type" />
      </ListItemButton>
      <ListItemButton component={RouterLink} to="add-burn-cause">
        <ListItemIcon>
          <WhatshotIcon />
        </ListItemIcon>
        <ListItemText primary="Burn Cause" />
      </ListItemButton>
      <ListItemButton component={RouterLink} to="add-question">
        <ListItemIcon>
          <QuizIcon />
        </ListItemIcon>
        <ListItemText primary="Questionnaire" />
      </ListItemButton>
      <ListItemButton component={RouterLink} to="add-education">
        <ListItemIcon>
          <CastForEducationIcon />
        </ListItemIcon>
        <ListItemText primary="Education Level" />
      </ListItemButton>
      <ListItemButton component={RouterLink} to="add-hospital">
        <ListItemIcon>
          <LocalHospitalIcon />
        </ListItemIcon>
        <ListItemText primary="Hospital" />
      </ListItemButton>

      <ListItemButton component={RouterLink} to="add-language">
        <ListItemIcon>
          <TranslateIcon />
        </ListItemIcon>
        <ListItemText primary="Language" />
      </ListItemButton>

      <ListItemButton component={RouterLink} to="add-followup">
        <ListItemIcon>
          <FollowTheSignsIcon />
        </ListItemIcon>
        <ListItemText primary="Followup Summary" />
      </ListItemButton>
    </List>
  );
};

export default SettingTab;
