import {Component} from 'react'
import ReviewsCarousel from './components/ReviewsCarousel'
import './App.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]
class App extends Component {
  state = {count: 0}

  nxtItem = () => {
    const {count} = this.state
    if (count < 3) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  prevItem = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  render() {
    const {count} = this.state
    console.log(count)

    return (
      <div className="bg-container">
        <h1>Reviews</h1>
        <ul className="review-container">
          <div className="left-btn">
            <button
              type="button"
              data-testid="leftArrow"
              onClick={this.prevItem}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
          </div>
          <ReviewsCarousel reviewsList={reviewsList[count]} />
          <div className="right-btn">
            <button
              type="button"
              data-testid="rightArrow"
              onClick={this.nxtItem}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </ul>
      </div>
    )
  }
}

export default App
