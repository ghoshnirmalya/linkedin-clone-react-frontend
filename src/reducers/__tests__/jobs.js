import reducer from '../jobs'
import constants from '../../constants/jobs'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    jobs: [],
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    },
    search: ''
  })
})

it('handles FETCH_JOBS_REQUEST', () => {
  const prevState = {
    jobs: [],
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_JOBS_REQUEST
  })

  expect(nextState).toEqual({
    jobs: [],
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: true,
      doneFetching: false,
      fetchError: ''
    }
  })
})

it('handles FETCH_JOBS_SUCCESS', () => {
  const prevState = {
    jobs: [],
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: true,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_JOBS_SUCCESS,
    jobs: [{ id: 1, title: 'John Doe' }, { id: 2, title: 'Jane Doe' }],
    'totalPages': 10
  })

  expect(nextState).toEqual({
    jobs: [{ id: 1, title: 'John Doe' }, { id: 2, title: 'Jane Doe' }],
    currentPage: 1,
    totalPages: 10,
    ui: {
      fetching: false,
      doneFetching: true,
      fetchError: ''
    }
  })
})

it('handles FETCH_JOBS_FAILURE', () => {
  const prevState = {
    jobs: [],
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.FETCH_JOBS_FAILURE,
    errorMessage: 'Not Found'
  })

  expect(nextState).toEqual({
    jobs: [],
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: 'Not Found'
    }
  })
})

it('handles UPDATE_CURRENT_PAGE', () => {
  const prevState = {
    jobs: [],
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  }

  const nextState = reducer(prevState, {
    type: constants.UPDATE_CURRENT_PAGE,
    page: 2
  })

  expect(nextState).toEqual({
    jobs: [],
    currentPage: 2,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    }
  })
})

it('handles RESET_JOBS', () => {
  const prevState = {
    jobs: [{ id: 1, title: 'John Doe' }, { id: 2, title: 'Jane Doe' }],
    currentPage: 1,
    totalPages: 10,
    ui: {
      fetching: false,
      doneFetching: true,
      fetchError: ''
    },
    search: ''
  }

  const nextState = reducer(prevState, {
    type: constants.RESET_JOBS
  })

  expect(nextState).toEqual({
    jobs: [],
    currentPage: 1,
    totalPages: 0,
    ui: {
      fetching: false,
      doneFetching: false,
      fetchError: ''
    },
    search: ''
  })
})

it('handles UPDATE_JOBS_SEARCH', () => {
  const prevState = {
    jobs: [],
    currentPage: 1,
    totalPages: 1,
    ui: {
      fetching: false,
      doneFetching: true,
      fetchError: ''
    },
    search: ''
  }

  const nextState = reducer(prevState, {
    type: constants.UPDATE_JOBS_SEARCH,
    search: 'John Doe'
  })

  expect(nextState).toEqual({
    jobs: [],
    currentPage: 1,
    totalPages: 1,
    ui: {
      fetching: false,
      doneFetching: true,
      fetchError: ''
    },
    search: 'John Doe'
  })
})
