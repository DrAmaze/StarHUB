export const colors = {
  purple: '#ab20c8',
  cream: '#e9ebf8',
  blue: '#79addc',
  salmon: '#ffc09f',
  yellow: '#ffee93'
}

export const styles = {
  app: {
    backgroundColor: colors.cream,
    height: '110%',
  },
  dashboard: {
    textAlign: 'center'
  },
  input: {
    backgroundColor: colors.cream,
    borderBottom: `2px dotted ${ colors.blue }`,
    color: colors.purple,
    width: '400px',
    textAlign: 'center',
    ':focus': {
      outline: 'none'
    },
    '@media (max-width: 415px)': {
      width: '90%',
      fontSize: '.8em'
    },
    '@media (max-width: 315px)': {
      fontSize: '.6em'
    },
    '@media (max-width: 250px)': {
      fontSize: '.5em'
    },
  },
  header: {
    color: colors.purple,
    fontSize: '2em',
    textAlign: 'center',
    fontWeight: 'bolder',
    padding: '1em 0',
  },
  footer: {
    backgroundColor: colors.yellow,
    borderTop: '1px solid lightgray',
    bottom: 0,
    color: colors.purple,
    display: 'flex',
    flexDirection: 'horizontal',
    justifyContent: 'space-evenly',
    fontSize: '1.5em',
    height: '36px',
    overflow: 'hidden',
    position: 'fixed',
    textAlign: 'center',
    width: '100%',
    zIndex: 10,
  },
  hover: {
    ':hover': {
      color: colors.salmon
    }
  },
  repoList: {
    display: 'inline-grid',
    gridTemplateColumns: '33% 34% 33%',
    gridTemplateRows: 'auto',
    textAlign: 'center',
    width: '100%',
    '@media (max-width: 1100px)': {
      gridTemplateColumns: '50% 50%',
    },
    '@media (max-width: 475px)': {
      gridTemplateColumns: '100%',
    }
  },
  repoListItem: {
    margin: '1em',
    padding: '.7em',
    border: `1px dotted ${ colors.blue }`,
    borderRadius: '5px',
    '@media (max-width: 750px)': {
      margin: '1em .5em',
    },
  },
  itemHeader: {
    fontWeight: 'bold',
    fontSize: '1.8em',
    color: colors.blue,
    '@media (max-width: 600px)': {
      fontSize: '1em',
    },
    '@media (max-width: 475px)': {
      fontSize: '2em',
    }, 
    '@media (max-width: 375px)': {
      fontSize: '1em',
    }
  },
  starring: {
    display: 'flex',
    flexDirection: 'horizontal',
    justifyContent: 'space-evenly'
  },
  gazers: {
    margin: 'auto 0'
  },
  count: {
    fontSize: '1em',
    textAlign: 'center',
    margin: '1.5em 0',
  },
  number: {
    color: colors.purple,
    fontWeight: 'bold',
    display: 'inline'
  },
  button: {
    border: `1px solid ${ colors.salmon }`,
    borderRadius: '10px',
    backgroundColor: colors.yellow,
    color: colors.salmon,
    padding: '5px 10px',
    ':hover': {
      border: `1px solid ${ colors.yellow }`,
      backgroundColor: colors.salmon,
      color: colors.yellow,
    }
  },
  url: {
    '@media (max-width: 690px)': {
      fontSize: '.5em'
    },
    '@media (max-width: 475px)': {
      fontSize: '1em',
    },
    '@media (max-width: 375px)': {
      fontSize: '.5em',
    }
  },
  loading: {
    textAlign: 'center',
    color: colors.purple
  },
  space: {
    padding: '20px 0'
  }
}
