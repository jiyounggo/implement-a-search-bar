import { Container, PosterContainer, SearchSection } from './Main.style';
import './Main.style';
import SearchModal from './SearchModal/SearchModal';

function Main() {
  return (
    <Container>
      <SearchSection>
        <PosterContainer className="search-poster-container">
          <h1>
            국내 모든 임상시험 검색하고
            <br />
            온라인으로 참여하기
          </h1>
        </PosterContainer>
        <SearchModal />
      </SearchSection>
    </Container>
  );
}

export default Main;
