import React from 'react';
import './CssFiles/Resources.css';

export default function Resources() {
    return(
        <div>
            <h3 className='text-center font mt-2 bg-success rounded p-1 text-white'>Resources</h3>
            
                

                <div className="row">
                
                    <div class="col-sm-6 col-md-4 mt-4">
                    <a href="https://resumegenius.com/resume-samples/engineering-resume-example" target="_blank" class="card-link" className='e'>
                        <div class="card shadow h-100 zoom1">
                            <div class="card-body">
                                <h4 class="card-title text-center text-dark font ">Sample Resumes</h4>
                                <p class="card-subtitle text-center text-muted mb-2">resumegenius.com</p>
                                <p class="card-text text-dark hd">This repo contains all the sample resumes</p>
                                <p className='text-dark hd'>Write the perfect engineering resume with our downloadable templates below and expert-crafted writing tips.</p>
                            </div>
                        </div>
                        </a>
                    </div>
           

                    <div class="col-sm-6 col-md-4 mt-4">
                    <a href="https://techdevguide.withgoogle.com/paths/interview/" target="_blank" class="card-link" className='e'>
                        <div class="card shadow h-100 zoom1">
                            <div class="card-body">
                                <h4 class="card-title text-center text-dark font ">Interview Preparation</h4>
                                <p class="card-subtitle text-center text-muted mb-2">techdevguide.com</p>
                                <p class="card-text text-dark hd">This resource can help you better understand and prepare for technical interviews</p>
                                <p className='text-dark hd'>Know about Hiring process...</p>
                            </div>
                        </div>
                        </a>
                    </div>
                    
                    
                    <div class="col-sm-6 col-md-4 mt-4">
                    <a href="https://internshala.com/" target="_blank" class="card-link" className='e'>
                        <div class="card shadow h-100 zoom1">
                            <div class="card-body">
                                <h4 class="card-title text-center text-dark font ">Apply Interns</h4>
                                <p class="card-subtitle text-center text-muted mb-2">Interns</p>
                                <p class="card-text text-dark hd">This repo contains all types of Internships</p>
                                <p className='text-dark hd'>Internshala is India's no.1 internship platform with 40000+ paid internships in Engineering, MBA, and other streams.</p>
                            </div>
                        </div>
                        </a>
                    </div>


                    <div class="col-sm-6 col-md-4 mt-4">
                    <a href="https://leetcode.com/" target="_blank" class="card-link" className='e'>
                        <div class="card shadow h-100 zoom1">
                            <div class="card-body">
                                <h4 class="card-title text-center text-dark font ">Competitive coding</h4>
                                <p class="card-subtitle text-center text-muted mb-2">Leetcode.com</p>
                                <p class="card-text text-dark hd">This repo contains questions to solve to improve coding skills</p>
                                <p className='text-dark hd'>LeetCode is the best platform to help you enhance your skills, expand your knowledge.</p>
                            </div>
                        </div>
                        </a>
                    </div>

                </div>

        
        </div>

)}