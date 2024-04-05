export const ssr = false;			//is important for Sveltekit, with this option the side is rendered as SPA

export const load = ({ url }) => {	//url and pathhandling for transitions
	const { pathname } = url;
	return {
        pathname
    };
};