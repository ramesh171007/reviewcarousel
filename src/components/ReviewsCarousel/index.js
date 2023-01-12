import './index.css'

const ReviewsCarousel = props => {
  const {reviewsList} = props
  const {imgUrl, username, companyName, description} = reviewsList

  return (
    <li className="li-container">
      <img src={imgUrl} alt={username} className="review-img-style" />
      <p className="review-username">{username}</p>
      <p className="review-company">{companyName}</p>
      <p className="review-desc">{description}</p>
    </li>
  )
}

export default ReviewsCarousel
