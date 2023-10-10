function Movie(item) {
  return (
    <div className="movieContainer">
      <div className="contents">
        <img className="moviePicture" src={item.poster_path} alt="" />
        <div className="text">
          <p className="title">{`${item.title}`}</p>
          <p className="vote_average">{`${item.vote_average}`}</p>
        </div>
      </div>
    </div>
  )
}
export default Movie