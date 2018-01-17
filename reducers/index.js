// @flow

type State = {
  +title: string,
  +desc: string,
  +url: string
}

const initialState: State = {
  title: 'Icemint Next Starter',
  desc: 'For more info check the repo',
  url: 'https://github.com/icemint/icemint-next-starter/blob/master/README.md'
}

const reducer = (state: State = initialState) => {
  return state
}

export default reducer
