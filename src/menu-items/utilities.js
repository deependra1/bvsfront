// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import WorkIcon from '@mui/icons-material/Work';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  VolunteerActivismIcon,
  WorkIcon,
  Diversity3Icon,
  TempleBuddhistIcon,
  FamilyRestroomIcon
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-donor',
      title: 'Donors',
      type: 'item',
      url: '/add-donor',
      icon: icons.VolunteerActivismIcon,
      breadcrumbs: false
    },
    {
      id: 'util-occupation',
      title: 'Occupations',
      type: 'item',
      url: '/add-occupation',
      icon: icons.WorkIcon,
      breadcrumbs: false
    },
    {
      id: 'util-ethnic',
      title: 'Ethnic Group',
      type: 'item',
      url: '/add-ethnic',
      icon: icons.Diversity3Icon,
      breadcrumbs: false
    },
    {
      id: 'util-religion',
      title: 'Religion',
      type: 'item',
      url: 'add-religion',
      icon: icons.TempleBuddhistIcon,
      breadcrumbs: false
    },
    {
      id: 'util-family',
      title: 'Family Type',
      type: 'item',
      url: '/add-family',
      icon: icons.FamilyRestroomIcon,
      breadcrumbs: false
    },
    {
      id: 'util-btype',
      title: 'Burn Type',
      type: 'item',
      url: '/add-burn-type',
      icon: icons.FamilyRestroomIcon,
      breadcrumbs: false
    },
    {
      id: 'util-bcause',
      title: 'Burn Cause',
      type: 'item',
      url: '/add-burn-cause',
      icon: icons.FamilyRestroomIcon,
      breadcrumbs: false
    }
  ]
};

export default utilities;
