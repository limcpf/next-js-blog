export interface iPost {
    id: number
    title: string
    contents: string
    show: number
    modifiedDate: string
    createdDate: string
}

export interface PostPageObject {
    post: iPost
}