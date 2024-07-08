export const ValidationCategory=(categoryItem:any,categoryList:any,checkUpdate:boolean)=>{
    const error={
        name:'',
    }
    let filterCategories=[];
    if(checkUpdate){
        filterCategories=categoryList.filter((e:any)=>{
            return e.id!=categoryItem.id;
        })
    }else{
        filterCategories=[...categoryList];
    }
    const checkWithCategoryList=()=>{
        let findItem=filterCategories.find((e:any)=>{
            return e.name===categoryItem.name;
        })
        if(findItem){
            return false;
        }
        return true;
    }
    if(categoryItem.name===''){
        error.name='Tên danh mục là bắt buộc'
    }else if(!checkWithCategoryList()){
        error.name='Tên danh mục đang trùng'
    }
    return error;
}