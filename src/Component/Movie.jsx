import * as MS from "./MovieStyle"

function Movie(item) {
  return (
    <MS.movieContainer>
      <div className="contents">
        <MS.moviePicture src={item.poster_path} alt="" />
        <MS.text>
          <MS.title>{`${item.title}`}</MS.title>
          <MS.vote_average>{`${item.vote_average}`}</MS.vote_average>
        </MS.text>
      </div>
      <MS.modal>
        <p className="modalTitle">{`${item.title}`}</p>
        <p className="modalText">{`${item.overview}`}</p>
      </MS.modal>
    </MS.movieContainer>
  )
}



export default Movie;