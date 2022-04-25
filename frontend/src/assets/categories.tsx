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
    route: 'permanentstay',
    category: 'permanentstay'
  },
  {
    name: 'Temporary stay',
    icon: <FontAwesomeIcon icon={faBuilding} />,
    route: 'temporarystay',
    category: 'temporarystay'
  },
  {
    name: 'Transport',
    icon: <FontAwesomeIcon icon={faCar} />,
    route: 'transport',
    category: 'transport'
  },
  {
    name: 'Medical and psychological assistance',
    icon: <FontAwesomeIcon icon={faSyringe} />,
    route: 'medicalassistance',
    category: 'medicalassistance'
  },
  {
    name: 'Electronic',
    icon: <FontAwesomeIcon icon={faComputer} />,
    route: 'electronic',
    category: 'electronic'
  },
  {
    name: 'Legal assistance',
    icon: <FontAwesomeIcon icon={faSection} />,
    route: 'legalassistance',
    category: 'legalassistance'
  },
  {
    name: 'For kids',
    icon: <FontAwesomeIcon icon={faChildren} />,
    route: 'forkids',
    category: 'forkids'
  }
];
