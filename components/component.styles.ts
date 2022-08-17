const styles = {
    /*
    |--------------------------------------------------------------------------
    | Card Component
    |--------------------------------------------------------------------------
    */
    cardsSection: `bg-white`,
    cardsWrapper: `w-full px-5 py-6 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl`,
    cardsContainer: `flex grid grid-cols-12 pb-10 `,

    /*
    |--------------------------------------------------------------------------
    | Card Component
    |--------------------------------------------------------------------------
    */

    cardWrapper: `flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4`,
    cardImage: `object-cover mb-2 overflow-hidden rounded-lg shadow-sm max-h-56`,
    cardSource: `bg-pink-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block`,
    cardTitle: `text-lg font-bold sm:text-xl md:text-2xl`,
    cardDescription: `text-sm text-gray-500`,
    cardSmallText: `pt-2 text-xs font-medium`,
    cardAnchor: `mr-1 underline`,
    cardReadNow: `mx-1 text-gray-600`,


    /*
    |--------------------------------------------------------------------------
    | Filter Component
    |--------------------------------------------------------------------------
    */

    filterWrapper: `flex w-full content-center justify-center`,
    filterButton: `flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600`,
    inputWrapper: `relative w-full`,
    inputComponent: `block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500`,


    /*
    |--------------------------------------------------------------------------
    | Dropdown Component
    |--------------------------------------------------------------------------
    */

    dropdownWrapper: `z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 block`,
    dropdownLists: `py-1 text-sm text-gray-700 dark:text-gray-200`,
    dropdownBtn: `inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`,


    /*
    |--------------------------------------------------------------------------
    | Search Button Component
    |--------------------------------------------------------------------------
    */

    searchButton: `absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`,

    /*
    |--------------------------------------------------------------------------
    | Header Component
    |--------------------------------------------------------------------------
    */
    headerSection: `relative w-full h-auto bg-no-repeat bg-cover`,
    headerSectionDiv: `absolute inset-0 z-0 h-full bg-blue-700 opacity-25`,
    headerNavWrapper: `flex items-center w-full h-20`,
    headerNav: `block w-full`,
    headerLists: `relative z-10 flex items-center px-6 text-sm text-white lg:text-base`,
    headerList: `mx-auto`,
    headerLink: `w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0`,
    headerTitle: `text-3xl font-black leading-none text-white select-none logo`,
    headerDot: `text-blue-700`,
    headerNavMobile: `fixed top-0 z-30 flex flex-col flex-wrap items-center justify-between w-full h-auto px-6 md:hidden`,
    headerMobileWrapper: `relative z-30 flex items-center justify-between w-full h-20`,
    headerMobileLink: `flex items-center flex-shrink-0 mr-6 text-white`,
    hamburgerWrapper: `block lg:hidden`,
    hamburgerBtn: `flex items-center justify-center w-10 h-10 text-gray-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-25 focus:outline-none`,
    headerContentContainer: `container flex items-center justify-center h-auto py-32 mx-auto`,
    headerContentWrapper: `z-10 flex flex-col items-center xl:px-0`,
    headerContentTitle: `mx-6 mt-1 text-5xl font-black text-center text-white lg:text-6xl sm:text-center sm:mx-0`,
    headerContentText: `w-2/3 my-6 text-xl font-normal text-center text-gray-200`,
    headerSearchWrapper: `flex justify-center md:mt-10`,

    /*
    |--------------------------------------------------------------------------
    | Title Component
    |--------------------------------------------------------------------------
    */
    titleSection: `h-auto bg-white`,
    titleWrapper: `px-5 py-24 mx-auto max-w-7xl`,
    titleContent: `w-full mx-auto text-center md:text-center`,
    titleHead: `mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight`,
    titleSpan: `w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline`,
    titleBreak: `lg:block hidden`,

    /*
    |--------------------------------------------------------------------------
    | Footer Component
    |--------------------------------------------------------------------------
    */

    footerSection: `py-10 bg-gray-50`,
    footerWrapper: `px-10 mx-auto max-w-7xl`,
    footerLogo: `flex flex-col items-center sm:flex-row sm:justify-between`,
    footerLogoText: `flex items-center text-lg font-bold`,
    footerNavWrapper: `flex flex-col justify-between mt-5 mb-5 text-center sm:mb-0 sm:mt-12 sm:flex-row`,
    footerLists: `flex flex-row justify-center pb-3 -ml-4 -mr-4 text-sm font-bold`,
    footerList: `px-2 text-gray-500 hover:text-gray-600`,
    footerCopyright: `mt-3 text-xs leading-tight text-gray-500 sm:mt-0`,
};

export default styles;
