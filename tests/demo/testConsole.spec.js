import {test, expect} from '@playwright/test'

test('to log __dirname', async({page}) =>{
    console.log(__dirname)
})