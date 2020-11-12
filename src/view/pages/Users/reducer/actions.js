import api from  './api'
import * as Types from './types'

export const fetch = () => async dispatch => {
  const { data } = await api.get()
  dispatch({ type: Types.FETCH, payload: data })
}

export const create = payload => async dispatch => {
  await api.create(payload).then(res => {
    if (res.status === 201) {
      dispatch({ type: Types.CREATE, payload: res.data })
      return Promise.resolve(res)
    }
  }).catch(err => {
    if (err.response.status === 422) {
      return Promise.reject(err.response)
    }
  })
}

export const update = payload => async dispatch => {
  await api.update(payload.id, payload).then(res => {
    if (res.status === 200) {
      dispatch({ type: Types.UPDATE, payload: res.data })
      return Promise.resolve(res)
    }
  }).catch(err => {
    if (err.response.status === 422) {
      return Promise.reject(err.response)
    }
  })
}

export const remove = id => async dispatch => {
  await api.remove(id)
  dispatch({ type: Types.REMOVE, id })
}
