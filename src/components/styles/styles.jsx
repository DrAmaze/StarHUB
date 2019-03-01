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
    height: '1000px',
  },
  dashboard: {
    textAlign: 'center'
  },
  input: {
    backgroundColor: colors.cream,
    borderBottom: `2px dotted ${ colors.blue }`,
    color: colors.purple,
    width: '40%',
    textAlign: 'center',
    ':focus': {
      outline: 'none'
    }
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
    width: '100%',
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
}