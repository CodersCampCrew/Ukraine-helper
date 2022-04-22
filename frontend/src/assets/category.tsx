import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faCar,
  faBed,
  faSyringe,
  faComputer,
  faSection,
  faChildren
} from '@fortawesome/free-solid-svg-icons';

export const category = [
  {
    name: 'Permament stay',
    icon: <FontAwesomeIcon icon={faBuilding} />,
    route: '/category/permament',
    category: 'permament'
  },
  {
    name: 'Temporary stay',
    icon: <FontAwesomeIcon icon={faBuilding} />,
    route: 'category/temporary',
    category: 'temporary'
  },
  {
    name: 'Transport',
    icon: <FontAwesomeIcon icon={faCar} />,
    route: 'category/transport',
    category: 'transport'
  },
  {
    name: 'Sleepover',
    icon: <FontAwesomeIcon icon={faBed} />,
    route: 'category/sleepover',
    category: 'sleepover'
  },
  {
    name: 'Medical and psychological assistance',
    icon: <FontAwesomeIcon icon={faSyringe} />,
    route: 'category/medical',
    category: 'medical'
  },
  {
    name: 'Electronic',
    icon: <FontAwesomeIcon icon={faComputer} />,
    route: 'category/electronic',
    category: 'electronic'
  },
  {
    name: 'Legal assistance',
    icon: <FontAwesomeIcon icon={faSection} />,
    route: 'category/legal_assistance',
    category: 'legal'
  },
  {
    name: 'For kids',
    icon: <FontAwesomeIcon icon={faChildren} />,
    route: 'category/for_kids',
    category: 'for_kids'
  }
];
