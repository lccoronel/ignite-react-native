import React, { useEffect, useState } from 'react';

import { ICarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';
import { Container } from './styles';

const Mycars: React.FC = () => {
  const [cars, setCars] = useState<ICarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/schedules_byuser?user_id=1')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <Container />;
};

export default Mycars;
