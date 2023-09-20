import React from 'react'
import Person from './Person';

type Props = {
  typePage: number;
}

export default function PersonItem({ typePage }: Props) {
  return (
    <>
      <Person typePage={typePage} />
    </>
  )
}