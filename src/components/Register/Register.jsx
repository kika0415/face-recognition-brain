import React from 'react';

const Register = ({ onRouteChange }) => (
  <article className='center mw5 mw6-ns br3 hidden ba b--black-10 mv4 shadow-5 center'>
    <main className='pa4 black-80'>
      <div className='measure'>
        <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
          <legend className='f1 fw6 ph0 mh0'>Register</legend>
          <div className='mt3'>
            <label className='db fw6 lh-copy f6' htmlFor='name'>
              Name
            </label>
            <input
              className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
              type='text'
              name='name'
            />

            <label className='db fw6 lh-copy f6' htmlFor='email-address'>
              Email
            </label>
            <input
              className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
              type='email'
              name='email-address'
              id='email-address'
            />
          </div>
          <div className='mv3'>
            <label className='db fw6 lh-copy f6' htmlFor='password'>
              Password
            </label>
            <input
              className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
              type='password'
              name='password'
              id='password'
            />
          </div>
        </fieldset>
        <div className=''>
          <input
            className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer'
            type='submit'
            value='Register'
            onClick={() => onRouteChange('home')}
          />
        </div>
      </div>
    </main>
  </article>
);

export default Register;
