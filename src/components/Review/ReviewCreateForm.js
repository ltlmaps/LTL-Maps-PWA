import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import RenderReviewForm from './RenderReviewForm';

const initialValues = {
  reviewTitle: '',
  reviewDetails: '',
  tripType: '',
  ratings: 5,
  roomsRatings: 5,
  serviceRatings: 5,
  cleanlinessRatings: 5,
  foodRatings: 5,
  tips: '',
  termsAndCondition: false,
  quant: '',
  roomViews: '',
  indoorPool: '',
  isTrendy: '',
  isRomantic: '',
  reviewPhotos: [],
};

const ReviewValidationSchema = () => {
  return Yup.object().shape({
    reviewTitle: Yup.string().required('Title is Required!'),
    reviewDetails: Yup.string().required('Details is Required!'),
    tripType: Yup.string().required('Trip Type is Required!'),
    ratings: Yup.number().required('Rating  is Required!'),
    roomsRatings: Yup.number().required('Room rating is Required!'),
    serviceRatings: Yup.number().required('Service rating is Required!'),
    cleanlinessRatings: Yup.number().required('Cleanness rating is Required!'),
    foodRatings: Yup.number().required('Food rating is Required!'),
    termsAndCondition: Yup.boolean().required(
      'Terms and condition acceptence  is Required!'
    ),
    quant: Yup.string()
      .oneOf(['yes', 'no', 'not-there'])
      .required('Please select this information'),
    roomViews: Yup.string()
      .oneOf(['yes', 'no', 'not-there'])
      .required('Please select this information'),
    indoorPool: Yup.string()
      .oneOf(['yes', 'no', 'not-there'])
      .required('Please select this information'),
    isTrendy: Yup.string()
      .oneOf(['yes', 'no', 'not-there'])
      .required('Please select this information'),
    isRomantic: Yup.string()
      .oneOf(['yes', 'no', 'not-there'])
      .required('Please select this information'),
  });
};

const handleSubmit = formProps => {
  const {
    reviewTitle,
    reviewDetails,
    tripType,
    ratings,
    roomsRatings,
    serviceRatings,
    cleanlinessRatings,
    foodRatings,
    tips,
    termsAndCondition,
    quant,
    roomViews,
    indoorPool,
    isTrendy,
    isRomantic,
  } = formProps;

  alert(
    `Review Submission Form: \n
    Review Title: ${reviewTitle} \n
    Review Details : ${reviewDetails} \n
    Trip Type : ${tripType} \n
    Ratings : ${ratings} \n
    Room Ratings : ${roomsRatings} \n
    Service Ratings : ${serviceRatings} \n
    Cleanness : ${cleanlinessRatings} \n
    Food Rating : ${foodRatings} \n
    Tips for other : ${tips} \n
    Is this a quaint hotel ? : ${quant} \n
    Does This Hotel offer rooms with great views ? : ${roomViews} \n
    Does This Hotel have an indoor pool ? : ${indoorPool} \n
    Is this a trendy hotel ? : ${isTrendy} \n
    Is this a romantic hotel ? : ${isRomantic} \n
    Agreed on Terms and Condition ? : ${termsAndCondition} \n`
  );
};

export default () => (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    render={RenderReviewForm}
    validationSchema={ReviewValidationSchema}
  />
);
