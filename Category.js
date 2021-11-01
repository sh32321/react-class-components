class Category extends React.Component{
    constructor(){
      super()
    }
  
    render(){
      return (
        <div className='align'>
          <div className='cat-nav center-align'>
            <div className='cat-link left valign-wrapper'>
              <div className='material-icons'>
                {/* <img src={this.props.data.icon} /> */}
                <i>{this.props.data.icon}</i>
              </div>
    
              <div className='card-content'>
                {/* <p>{this.props.data.icon}</p> */}
                <p>{this.props.data.title}</p>
              </div>
    
              
            </div>
          </div>
        </div>
      )
    }
  }