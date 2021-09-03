import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

import sizes from '../config/sizes';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

import NavigationAction from '../navigation/NavigationAction';

const reviewSchema = yup.object({
  email: yup.string().required().email(),
  //displayName: yup.string(),
  password: yup.string().required().min(4),
});

const AuthScreen = ({route, navigation}) => {
  const {newuser} = route.params;

  useEffect(() => {
    if (newuser) NavigationAction.set(navigation);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.creds}>
        <Text style={styles.header}>Welcome!</Text>
        <Formik
          initialValues={{email: '', password: '', displayName: ''}}
          validationSchema={reviewSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.resetForm();
            NavigationAction.resetTo('Home');
          }}>
          {({
            handleSubmit,
            handleChange,
            values,
            errors,
            touched,
            setFieldTouched,
          }) => (
            <View style={styles.appForm}>
              <AppTextInput
                errors={errors.email}
                onBlur={() => setFieldTouched('email')}
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange('email')}
              />
              {errors.email && touched.email && (
                <Text style={{color: 'red'}}>{errors.email}</Text>
              )}
              {newuser && (
                <AppTextInput
                  errors={errors.displayName}
                  onBlur={() => setFieldTouched('displayName')}
                  placeholder="Display Name"
                  value={values.displayName}
                  onChangeText={handleChange('displayName')}
                />
              )}

              <AppTextInput
                errors={errors.password}
                onBlur={() => setFieldTouched('password')}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                value={values.password}
                onChangeText={handleChange('password')}
              />
              {errors.password && touched.password && (
                <Text style={{color: 'red'}}>{errors.password}</Text>
              )}

              <AppButton
                title={newuser ? 'Sign Up' : 'Login In'}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
      <View style={styles.footer}>
        <Text>
          {newuser ? 'Already have an account?' : 'New here?'}
          <TouchableOpacity
            onPress={() =>
              NavigationAction.navigate(newuser ? 'LogIn' : 'SignUp')
            }>
            <Text
              style={{fontStyle: 'italic', textDecorationLine: 'underline'}}>
              {' '}
              Click here
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appForm: {},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  creds: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: '10%',
  },
  header: {
    fontSize: sizes.TITLE_FONT,
  },
});

export default AuthScreen;
