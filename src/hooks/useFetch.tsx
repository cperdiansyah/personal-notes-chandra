import { useState, useEffect } from 'react'
import { fetchWithToken } from '@/utils/network-data'

const useFetch = <T extends object>(url: string, options: RequestInit = {}) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetchWithToken(url, { ...options, signal })
        const responseJson = await response.json()

        if (responseJson.status !== 'success') {
          throw new Error(responseJson.message)
        }
        if (!signal.aborted) {
          setData(responseJson.data)
        }
      } catch (err) {
        if (!signal.aborted) {
          setError(err instanceof Error ? err.message : 'An error occurred')
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      abortController.abort()
    }
  }, [url, JSON.stringify(options)])

  return { data, error, loading }
}

export default useFetch
