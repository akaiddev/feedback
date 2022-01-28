import PropTypes from 'prop-types'

function Footer({ text, bgColor, textColor }) {
  const footerSyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <footer style={footerSyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text: 'Abdur Rahman Akaid',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
}

Footer.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Footer
