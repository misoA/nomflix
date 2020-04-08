import React from 'react';
import SearchPresenter from './SearchPresenter';
import { MoviesApi, TVApi } from 'api';

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: '',
    error: null,
    loading: false
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      this.searcyByTerm();
    }
  };

  updateTerm = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      searchTerm: value
    });
  };

  searcyByTerm = async () => {
    const { searchTerm } = this.state;

    try {
      this.setState({
        loading: true
      });
      const {
        data: { results: movieResults }
      } = await MoviesApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await TVApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults
      });
    } catch (error) {
      this.setState({
        error: "Can't find results."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
