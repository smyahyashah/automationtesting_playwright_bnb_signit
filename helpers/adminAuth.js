async function loginasAdmin(request, context) {
    const req = await request.post('/api/auth/login', {
        data: {username: 'admin', password: 'pasword'}
    });
    if(req.ok()){
        const text = await req.text().catch(() => '');
        throw new Error('Admin not foound: ${req.status()} ${req.statusText()}');
    }
    
}

module.exports = {loginasAdmin};