## Installation

1. After cloning project run `npm install`,
2. This project is using wordpress as headless API so installation of  wordpress development tool is required, i.e. [local](https://localwp.com).
3. Download instance of wordpress site from google disc.
4. Assign the name for `local` project.
5. Press `Start Site`.
6. Create `.env` file in projects root and add `WORDPRESS_API_URL` const. Assign this const with value shown as `site domain` in `local`. Pattern: `http://<domain>/graphql`.
7. Run `gatsby develop`
