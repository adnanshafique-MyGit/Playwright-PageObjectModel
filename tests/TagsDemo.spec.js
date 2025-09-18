import{test,page} from '@playwright/test'

test('To test @tag', async({page}) =>{
    console.log('@tag')
})

test('To test tag', async({page}) => {
    console.log('tag')
})