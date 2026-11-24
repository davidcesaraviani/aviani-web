import facebook from '../assets/about/social-1.svg';
import facebookWhite from '../assets/contact/social-facebook-white.svg';
import instagram from '../assets/about/social-3.svg';
import linkedin from '../assets/contact/social-7.svg';
import linkedinWhite from '../assets/about/social-4-white.svg';
import github from '../assets/social/github.svg';
import gitlab from '../assets/social/gitlab.svg';
import tecso from '../assets/social/tecso.svg';

/** Redes y perfiles públicos. `iconWhite` se usa cuando el botón está resaltado. */
export const socials = [
	{ key: 'facebook', name: 'Facebook', href: 'https://www.facebook.com/david.aviani', icon: facebook, iconWhite: facebookWhite },
	{ key: 'instagram', name: 'Instagram', href: 'https://www.instagram.com/david_aviani/', icon: instagram, iconWhite: instagram },
	{ key: 'linkedin', name: 'LinkedIn', href: 'https://www.linkedin.com/in/david-aviani/', icon: linkedin, iconWhite: linkedinWhite },
	{ key: 'github', name: 'GitHub', href: 'https://github.com/davidcesaraviani', icon: github, iconWhite: github },
	{ key: 'gitlab', name: 'GitLab', href: 'https://gitlab.com/david.aviani', icon: gitlab, iconWhite: gitlab },
	{ key: 'tecso', name: 'Tecso', href: 'https://tecso.coop/', icon: tecso, iconWhite: tecso },
] as const;
