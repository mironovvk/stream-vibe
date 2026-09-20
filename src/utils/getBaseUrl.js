const getBaseUrl = (path = '') => (
    `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
)

export default getBaseUrl