// assets
import {
  UserAddOutlined,
  OrderedListOutlined,
  SearchOutlined,
  FileSearchOutlined,
  RedoOutlined,
  AppstoreAddOutlined
} from '@ant-design/icons';

// icons
const icons = {
  UserAddOutlined,
  SearchOutlined,
  OrderedListOutlined,
  FileSearchOutlined,
  AppstoreAddOutlined,
  RedoOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const apps = {
  id: 'apps',
  title: 'Apps',
  type: 'group',
  children: [
    {
      id: 'add-patient',
      title: 'Add Patient',
      type: 'item',
      url: '/patient',
      icon: icons.UserAddOutlined,
      breadcrumbs: false
    },
    {
      id: 'all-patient',
      title: 'List, View and Edit Patient',
      type: 'item',
      url: '/patient-list',
      icon: icons.OrderedListOutlined,
      breadcrumbs: false
    },
    {
      id: 'search-patient',
      title: 'Add Other Informations',
      type: 'item',
      url: '/patient-search',
      icon: icons.AppstoreAddOutlined,
      breadcrumbs: false
    },

    {
      id: 'patient-report',
      title: 'Patient Report',
      type: 'item',
      url: '/patient-report',
      icon: icons.FileSearchOutlined,
      breadcrumbs: false
    }
    // {
    //   id: 'post-treatment-report',
    //   title: 'Post Treatment Report',
    //   type: 'item',
    //   url: '/post-treatment-report',
    //   icon: icons.RedoOutlined,
    //   breadcrumbs: false
    // }
  ]
};

export default apps;
