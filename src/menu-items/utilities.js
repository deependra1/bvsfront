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
      icon: icons.VolunteerActivismIcon
    },
    {
      id: 'util-occupation',
      title: 'Occupations',
      type: 'item',
      url: '/add-occupation',
      icon: icons.WorkIcon
    },
    {
      id: 'util-ethnic',
      title: 'Ethnic Group',
      type: 'item',
      url: '/add-ethnic',
      icon: icons.Diversity3Icon
    },
    {
      id: 'ant-religion',
      title: 'Religion',
      type: 'item',
      url: 'add-religion',
      icon: icons.TempleBuddhistIcon,
      breadcrumbs: false
    },
    {
      id: 'ant-family',
      title: 'Family Type',
      type: 'item',
      url: '/add-family',
      icon: icons.FamilyRestroomIcon
      // breadcrumbs: false
    }
  ]
};

export default utilities;
