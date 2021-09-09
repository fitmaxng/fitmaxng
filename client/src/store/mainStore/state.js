export default function () {
  return {
    currentJoinLink: null,
    current_user: null,
    childSideNav: false,
    parentSideNav: false,
    navigated: 'guest', // loggedin or loggedout or guest
    signupForm: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: ''
    },
    loginForm: {
      email: '',
      password: ''
    }
  }
}

// {
//   "user": {
//     "email": "string@string.com",
//     "role": "user",
//     "first_name": "string",
//     "last_name": "string"
//   },
//   "classes": [
//     {
//       "name": "East Coast US Morning",
//       "isodatetime": "2021-09-06T07:00:00+00:00"
//     },
//     {
//       "name": "Nigeria Morning",
//       "isodatetime": "2021-09-06T07:00:00+00:00"
//     },
//     {
//       "name": "Lagos and London Morning",
//       "isodatetime": "2021-09-07T07:00:00+00:00"
//     },
//     {
//       "name": "Lagos and London",
//       "isodatetime": "2021-09-08T07:00:00+00:00"
//     },
//     {
//       "name": "East Coast Morning",
//       "isodatetime": "2021-09-08T07:00:00+00:00"
//     },
//     {
//       "name": "Lagos and London",
//       "isodatetime": "2021-09-09T07:00:00+00:00"
//     },
//     {
//       "name": "Lagos and London",
//       "isodatetime": "2021-09-10T07:00:00+00:00"
//     },
//     {
//       "name": "East Coast Morning",
//       "isodatetime": "2021-09-10T07:00:00+00:00"
//     },
//     {
//       "name": "Lagos and London",
//       "isodatetime": "2021-09-11T09:00:00+00:00"
//     }
//   ]
// }
