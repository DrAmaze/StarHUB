import Radium from 'radium';

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
    height: '100%',
  },
  dashboard: {
    textAlign: 'center'
  },
  input: {
    backgroundColor: colors.cream,
    borderBottom: `2px dotted ${ colors.blue }`,
    width: '40%',
    textAlign: 'center'
  },
  header: {
    color: colors.purple,
    fontSize: '2em',
    textAlign: 'center',
    fontWeight: 'bolder',
    padding: '1em 0',
  }
}