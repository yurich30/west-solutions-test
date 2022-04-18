import React from 'react';
import { CustomContainer } from '../../components/CustomComponents/CustomContainer.styled';
import { useAppSelector } from '../../store/hooks';

function ProfilePage() {
  const { user } = useAppSelector(state => state.auth);
  return (
    <CustomContainer>
      <h2>Hello, {user.email}</h2>
    </CustomContainer>
  );
}

export default ProfilePage;
