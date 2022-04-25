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

export const categories = [
  {
    name: 'permanent stay',
    icon: <FontAwesomeIcon icon={faBuilding} />,
    route: '/category/permanentstay',
    category: 'permanentstay'
  },
  {
    name: 'Temporary stay',
    icon: <FontAwesomeIcon icon={faBuilding} />,
    route: 'category/temporarystay',
    category: 'temporarystay'
  },
  {
    name: 'Transport',
    icon: <FontAwesomeIcon icon={faCar} />,
    route: 'category/transport',
    category: 'transport'
  },
  {
    name: 'Medical and psychological assistance',
    icon: <FontAwesomeIcon icon={faSyringe} />,
    route: 'category/medicalassistance',
    category: 'medicalassistance'
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
    route: 'category/legalassistance',
    category: 'legalassistance'
  },
  {
    name: 'For kids',
    icon: <FontAwesomeIcon icon={faChildren} />,
    route: 'category/forkids',
    category: 'forkids'
  }
];
