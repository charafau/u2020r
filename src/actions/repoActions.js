export const FETCH_REPOS_ACTION = 'FETCH_REPOS';

export function fetchRepos() {

    return (function (dispatch) {
        fetch('https://api.github.com/search/repositories?q=created&sort=stars&order=desc')
            .then((response) => response.json())
            .then((responseJson) => {

                // console.log(responseJson);
                dispatch({
                    type: FETCH_REPOS_ACTION,
                    payload: {
                        repos: responseJson.items
                    }
                })
            })
            .catch
            ((error) => {
                console.log(error)
                return {
                    type: 'FETCH_REPOS_FAILED',
                    payload: {
                        repos: []
                    }
                }
            });
    })


}