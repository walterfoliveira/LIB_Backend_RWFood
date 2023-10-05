import React from 'react'
import Person from './Person';
import PrivateRoute from './PrivateRoute';

type Props = {
  typePage: number;
}

export default function PersonItem({ typePage }: Props) {
  return (
    <>
      <PrivateRoute />
      <Person typePage={typePage} />
    </>
  )
}