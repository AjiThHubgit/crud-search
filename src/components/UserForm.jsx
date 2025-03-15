import React from 'react'

const UserForm = () => {
    return (
        <section className=' d-flex justify-content-center'>

            <div class="card mt-5" style={{ width: "30rem" }}>
                <div class="card-body">
                    <h5 class="card-title mb-3">Create user</h5>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default UserForm