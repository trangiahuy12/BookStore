# Website

db.customer.aggregate([
    {$match:{business:{$exists:true}}}, 
    {$addFields:
        {khuyenMai:{$cond:{if:{$eq:["$state", "MA"]}, then:true, else:false}}}}, 
    {$project:{fed_id:1, cust_type_cd:1, state:1, }}])