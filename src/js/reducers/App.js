export default function reducer(state={
    active_language : "ind"
  }, action) {
  
	switch (action.type) {
		case 'CHANGE_LANGUAGE_IND_TO_ENG' : {
			return  {
				...state,
				active_language : "eng",
			}
		}

		case 'CHANGE_LANGUAGE_ENG_TO_IND' : {
			return  {
				...state,
        active_language : "ind",
			}
		}
	}

	return state;
}