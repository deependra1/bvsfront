// assets
import { UserAddOutlined, OrderedListOutlined, SearchOutlined, FileSearchOutlined } from '@ant-design/icons';

// icons
const icons = {
  UserAddOutlined,
  SearchOutlined,
  OrderedListOutlined,
  FileSearchOutlined
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
      icon: icons.UserAddOutlined
    },
    {
      id: 'all-patient',
      title: 'List Patient',
      type: 'item',
      url: '/patient-list',
      icon: icons.OrderedListOutlined
    },
    {
      id: 'search-patient',
      title: 'Search Patient',
      type: 'item',
      url: '/patient-search',
      icon: icons.SearchOutlined
    },

    {
      id: 'patient-report',
      title: 'Patient Report',
      type: 'item',
      url: '/patient-report',
      icon: icons.FileSearchOutlined
    }
  ]
};

export default apps;
